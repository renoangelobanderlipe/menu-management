import { Avatar, IconButton, Typography } from '@material-tailwind/react';
import { Icon } from '@iconify/react';

const AddImageUploader = ({ selectedImage, handleImageChange, handleRemoveImage, setValue, errors }) => (
  <div className="col-span-2 flex flex-col gap-2">
    <Typography variant="h5" color="black">
      Item Image
    </Typography>
    {!selectedImage ? (
      <div>
        <label
          htmlFor="item-image"
          className="flex h-full items-center gap-4 rounded-lg border border-dashed border-neutrals-500 px-4 py-4 dark:border-neutrals-600 2xl:flex-col 2xl:py-12"
        >
          <Icon icon="ph:upload-duotone" className="h-8 w-8 text-primary-500" />
          <div className="flex flex-col gap-2 2xl:items-center 2xl:justify-center 2xl:text-center">
            <Typography variant="h5" color="black">
              Drag and Drop or Choose a Local File
            </Typography>
            <Typography variant="small" color="gray">
              Supported formats: .png, .jpg, .svg
            </Typography>
          </div>
        </label>
        <input
          onChange={(event) => handleImageChange(event, setValue)}
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
      </div>
    ) : (
      <div>
        <label
          htmlFor="item-image"
          className="flex h-full w-fit flex-row items-center gap-4 rounded-lg border border-solid border-neutrals-500 px-4 py-3.5 dark:border-neutrals-600"
        >
          <Avatar src={selectedImage} alt="avatar" variant="rounded" size="sm" />
          <div className="flex flex-col items-center justify-center gap-2">
            <Typography variant="h5" color="black">
              item-1.jpg
            </Typography>
            <Typography variant="small" color="gray">
              140 KB
            </Typography>
          </div>
          <IconButton variant="text" color="red" onClick={() => handleRemoveImage(setValue)}>
            <Icon icon="ph:trash-duotone" className="h-5 w-5" />
          </IconButton>
        </label>
        <input id="item-image" type="file" size="lg" className="hidden" />
      </div>
    )}
  </div>
);

export default AddImageUploader;
