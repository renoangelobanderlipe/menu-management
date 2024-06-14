import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Button, Dialog, IconButton, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { menuItemSchema } from "../utils/validations";
import { useState } from "react";

const AddMenuDialog = ({ handleOpen, open }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(menuItemSchema),
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file));
      setValue("image", file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setValue("image", null);
  };

  const onSubmit = async (data) => {
    //
  }

  return (
    <>
      <Dialog
        size="sm"
        open={open}
        handler={handleOpen}
        className="overflow-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold" color="black">
                Add Menu Item
              </Typography>
              <Typography variant="paragraph" color="gray">
                Easily add items to your menu with just a few clicks.
              </Typography>
            </div>

            <div className="grid h-[300px] w-full grid-cols-2 gap-6 overflow-scroll md:h-[500px] lg:h-full lg:overflow-hidden">
              {!selectedImage ? (<div className="flex flex-col col-span-2 gap-2">
                <Typography variant="h5" color="black">
                  Item Image
                </Typography>
                <label
                  htmlFor="item-image"
                  className="border-neutrals-500 dark:border-neutrals-600 2xl:flex-col 2xl:py-12 flex items-center h-full gap-4 px-4 py-4 border border-dashed rounded-lg"
                >
                  <Icon
                    icon="ph:upload-duotone"
                    className="text-primary-500 w-8 h-8"
                  />
                  <div className="2xl:items-center 2xl:justify-center 2xl:text-center flex flex-col gap-2">
                    <Typography variant="h5" color="black">
                      Drag and Drop or Choose a Local File
                    </Typography>
                    <Typography variant="small" color="gray">
                      Supported formats: .png, .jpg, .svg
                    </Typography>
                  </div>
                </label>
                <input
                  onChange={handleImageChange}
                  id="item-image"
                  type="file"
                  size="lg"
                  className="hidden"
                />
                {errors.image && (
                  <Typography variant="small" color="red">
                    {errors.image.message}
                  </Typography>
                )}
              </div>) : (
                <div className="flex flex-col col-span-2 gap-2">
                  <Typography variant="h5" color="black">
                    Item Image
                  </Typography>
                  <label
                    htmlFor="item-image"
                    className="flex h-full w-fit flex-row items-center gap-4 rounded-lg border border-solid border-neutrals-500 px-4 py-3.5 dark:border-neutrals-600"
                  >
                    <Avatar
                      src={selectedImage}
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
                      onClick={handleRemoveImage}
                    >
                      <Icon icon="ph:trash-duotone" className="w-5 h-5" />
                    </IconButton>
                  </label>
                  <input
                    id="item-image"
                    type="file"
                    size="lg"
                    className="hidden"
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Item Name
                </Typography>
                <Input {...register("itemName")} size="lg" />
                {errors.itemName && (
                  <Typography variant="small" color="red">
                    {errors.itemName.message}
                  </Typography>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Select A Category
                </Typography>
                <Input
                  {...register("category")}
                  size="lg"
                  placeholder="Add up to 3 categories, separated by commas"
                />
                {errors.category && (
                  <Typography variant="small" color="red">
                    {errors.category.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Price
                </Typography>
                <Input {...register("price")} size="lg" />
                {errors.price && (
                  <Typography variant="small" color="red">
                    {errors.price.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Cost
                </Typography>
                <Input {...register("cost")} size="lg" />
                {errors.cost && (
                  <Typography variant="small" color="red">
                    {errors.cost.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Amount in Stock
                </Typography>
                <Input {...register("amountInStock")} size="lg" />
                {errors.amountInStock && (
                  <Typography variant="small" color="red">
                    {errors.amountInStock.message}
                  </Typography>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Typography variant="h5" color="black">
                  Options Available
                </Typography>
                <Input
                  {...register("options")}
                  size="lg"
                  placeholder="Add up to 4 options, separated by commas"
                />
                {errors.options && (
                  <Typography variant="small" color="red">
                    {errors.options.message}
                  </Typography>
                )}
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
              <Button className="lg:w-fit w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <Icon
                    icon="svg-spinners:6-dots-scale"
                    style={{ color: "#fff" }}
                  />
                ) : (
                  "Add Menu Item"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Dialog>
      {/* <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="overflow-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col w-full gap-6">
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold" color="black">
                Add Menu Item
              </Typography>
              <Typography variant="paragraph" color="gray">
                Easily add items to your menu with just a few clicks.
              </Typography>
            </div>

            <div className="grid h-[500px] grid-cols-6 gap-6 overflow-scroll lg:h-full lg:overflow-hidden">
              <div className="flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Item Image
                </Typography>
                <label
                  htmlFor="item-image"
                  className="border-neutrals-500 dark:border-white lg:flex-col lg:py-12 flex items-center h-full gap-4 px-4 py-4 border border-dashed rounded-lg"
                >
                  <Icon
                    icon="ph:upload-duotone"
                    className="text-primary-500 w-8 h-8"
                  />
                  <div className="lg:items-center lg:justify-center lg:text-center flex flex-col gap-2">
                    <Typography variant="h5" color="black">
                      Drag and Drop or Choose a Local File
                    </Typography>
                    <Typography variant="small" color="gray">
                      Supported formats: .png, .jpg, .svg
                    </Typography>
                  </div>
                </label>
                <input
                  {...register("image")}
                  id="item-image"
                  label="Email"
                  type="file"
                  size="lg"
                  className="hidden"
                />
                <ErrorMessage errors={errors} field={'image'} />
              </div>
              <div className="sm:col-span-3 flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Item Name
                </Typography>
                <Input {...register("itemName")} size="lg" />
                <ErrorMessage errors={errors} field={'itemName'} />
              </div>
              <div className="sm:col-span-3 flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Select A Category
                </Typography>
                <Input
                  {...register("category")}
                  size="lg"
                  placeholder="Add up to 3 categories, separated by commas"
                />
                <ErrorMessage errors={errors} field={'category'} />
              </div>

              <div className="md:col-span-3 lg:col-span-2 flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Price
                </Typography>
                <Input {...register("price")} size="lg" />
                <ErrorMessage errors={errors} field={'price'} />
              </div>

              <div className="md:col-span-3 lg:col-span-2 flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Cost
                </Typography>
                <Input {...register("cost")} size="lg" />
                <ErrorMessage errors={errors} field={'cost'} />
              </div>

              <div className="lg:col-span-2 flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Amount in Stock
                </Typography>
                <Input {...register("amountInStock")} size="lg" />
                <ErrorMessage errors={errors} field={'amountInStock'} />
              </div>

              <div className="flex flex-col col-span-6 gap-2">
                <Typography variant="h5" color="black">
                  Options Available
                </Typography>
                <Input
                  {...register("options")}
                  size="lg"
                  placeholder="Add up to 4 options, separated by commas"
                />
                <ErrorMessage errors={errors} field={'options'} />
              </div>
            </div>

            <div className="flex flex-row justify-end w-full gap-3 p-0">
              <Button
                onClick={handleOpen}
                variant="text"
                color="gray"
              >
                Cancel
              </Button>
              <Button className="lg:w-fit w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <Icon
                    icon="svg-spinners:6-dots-scale"
                    style={{ color: "#fff" }}
                  />
                ) : (
                  "Add Menu Item"
                )}
              </Button>
            </div>
          </div>
        </form>
      </Dialog> */}
    </>
  );
}

export default AddMenuDialog;