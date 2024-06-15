import { Icon } from '@iconify/react/dist/iconify.js'
import { Avatar, Button, Dialog, IconButton, Input, Typography } from '@material-tailwind/react'

const EditMenuDialog = ({ handleOpen, open }) => {
  return (
    <>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="overflow-auto"
      >
        <div className="flex flex-col w-full gap-6">
          <div className="flex flex-col gap-2">
            <Typography variant="h3" className="font-bold" color="black">
              Edit Menu Item
            </Typography>
            <Typography variant="paragraph" color="gray">
              Easily edit items from your menu with just a few clicks.
            </Typography>
          </div>

          {/*  */}
          <div className="grid h-[300px] w-full grid-cols-2 gap-6 overflow-scroll md:h-[500px] lg:h-full lg:overflow-hidden">
            <div className="flex flex-col col-span-2 gap-2">
              <Typography variant="h5" color="black">
                Item Image
              </Typography>
              <label
                htmlFor="item-image"
                className="flex h-full w-fit flex-row items-center gap-4 rounded-lg border border-solid border-neutrals-500 px-4 py-3.5 dark:border-neutrals-600"
              >
                <Avatar
                  src="https://docs.material-tailwind.com/img/face-3.jpg"
                  alt="avatar"
                  variant="rounded"
                  size="sm"
                />
                <div className="flex flex-col items-center justify-center gap-2">
                  <Typography variant="h5" color="black">
                    item-1.jpg
                  </Typography>
                  <Typography variant="small" color="gray">
                    140 KB
                  </Typography>
                </div>
                <IconButton
                  variant="text"
                  color="red"
                //   onClick={}
                >
                  <Icon icon="ph:trash-duotone" className="w-5 h-5" />
                </IconButton>
              </label>
              {/* <input
                                id="item-image"
                                label="Email"
                                type="file"
                                size="lg"
                                className="hidden"
                            /> */}
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="black">
                Item Name
              </Typography>
              <Input label="Email" size="lg" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="black">
                Select A Category
              </Typography>
              <Input
                label="Email"
                size="lg"
                placeholder="Add up to 3 categories, separated by commas"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="black">
                Price
              </Typography>
              <Input label="Email" size="lg" />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="black">
                Cost
              </Typography>
              <Input label="Email" size="lg" />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="black">
                Amount in Stock
              </Typography>
              <Input label="Email" size="lg" />
            </div>

            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="black">
                Options Available
              </Typography>
              <Input
                label="Email"
                size="lg"
                placeholder="Add up to 4 options, separated by commas"
              />
            </div>
          </div>

          {/*  */}
          <div className="flex flex-row justify-end w-full gap-3 p-0">
            <Button
              onClick={handleOpen}
              className=""
              variant="text"
              color="gray"
            >
              Cancel
            </Button>
            <Button className="md:w-fit w-full" onClick={handleOpen}>
              Save Menu Item
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default EditMenuDialog
