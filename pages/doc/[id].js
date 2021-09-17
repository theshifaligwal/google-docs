import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { getSession, signOut, useSession } from "next-auth/client";
// Next Router
import { Router, useRouter } from "next/dist/client/router";

// React firebase hooks
import { useDocumentOnce } from "react-firebase-hooks/firestore";

// Components
import Login from "../../components/Login";
import TextEditor from "../../components/TextEditor";

// firebase
import { db } from "../../firebase";

export default function Doc() {
  const [session] = useSession();
  if (!session) return <Login />;

  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loadingSnapshot] = useDocumentOnce(
    db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
  );

  //   redirect f user tries to access a url they do not have access to...
  if (!loadingSnapshot && !snapshot?.data()?.fileName) {
    router.replace("/");
  }

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>

        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p>File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          size="regular"
          className="hidden md:!inline-flex h-10"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          <Icon name="people" size="md" />
          SHARE
        </Button>
        <img
          className="cursor-pointer rounded-full h-10 w-10 ml-2"
          src={session.user.image}
          alt=""
        />
      </header>

      <TextEditor />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
