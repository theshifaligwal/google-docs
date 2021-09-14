import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
export default function Header() {
    return (
        <div className="sticky z-50 top-0 flex items-center px-4 py-2 shadow-md bg-white">
            <Button color="blue"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="h-20 w-20 border-0"
            
            > 
            <Icon name="menu" size="3xl" /> </Button>
            <Icon name="description" size="5xl" color="blue" />
            <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
        </div>
    )
}
