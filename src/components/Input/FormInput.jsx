import { Input, Typography } from '@material-tailwind/react';

const FormInput = ({ label, register, name, errors, placeholder, size = 'lg' }) => (
  <div className="col-span-2 flex flex-col gap-2 md:col-span-1">
    <Typography variant="h5" color="black">
      {label}
    </Typography>
    <Input {...register(name)} placeholder={placeholder} size={size} />
    {errors[name] && (
      <Typography variant="small" color="red">
        {errors[name].message}
      </Typography>
    )}
  </div>
);

export default FormInput;
