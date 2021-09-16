import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

export default function DocumentRow({ id, fileName, date }) {
  return (
    <div>
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocalDateString()}</p>
    </div>
  );
}
