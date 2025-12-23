interface FormErrorProps {
  error?: string[];
}

export const FormError = ({ error }: FormErrorProps) => {
  if (!error) return null;

  return (
    <>
      {error.map((err, index) => (
        <div key={index} className="text-red-500 text-xs py-2">
          {err}
        </div>
      ))}
    </>
  );
};
