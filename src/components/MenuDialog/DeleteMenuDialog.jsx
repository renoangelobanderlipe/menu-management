import { Button, Dialog, Typography } from '@material-tailwind/react';
import { useMenuStore } from '@services/state/store';
import { getDatabase, ref, remove } from 'firebase/database';
import { app } from '../../services/provider/firebaseConfig';
import { toast } from 'sonner';

const DeleteMenuDialog = ({ handleOpen, open }) => {
    const menuId = useMenuStore((state) => state.menuId);

    const handleDelete = async () => {
        try {
            if (!menuId) {
                toast.error("No menu item selected for deletion.");
                handleOpen()
                return;
            }

            const db = getDatabase(app);
            const dbRef = ref(db, `menus/${menuId}`);
            await remove(dbRef);

            useMenuStore.getState().clearMenuId()

            toast.success("Menu item deleted successfully.");
            handleOpen();
        } catch (error) {
            console.error("Error deleting menu item:", error);
            toast.error("An error occurred while deleting the menu item.");
        }
    };

    return (
        <>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="w-fit bg-light-container p-6 shadow-none"
            >
                <div className="flex flex-col gap-6">
                    <Typography variant="h4" className="font-bold" color="black">
                        Delete Menu Item
                    </Typography>
                    <Typography variant="paragraph" color="gray">
                        Are you sure you want to delete this template and all associated
                        data?
                    </Typography>
                    <div className="lg:flex-row-reverse flex flex-col gap-3">
                        <Button
                            size="lg"
                            className="bg-danger-500 md:w-fit w-full"
                            onClick={() => handleDelete()}
                        >
                            Delete Menu Item
                        </Button>
                        <Button
                            color="gray"
                            variant="text"
                            className="md:w-fit w-full"
                            onClick={handleOpen}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default DeleteMenuDialog
