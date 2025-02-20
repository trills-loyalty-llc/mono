export const Label: React.FC<LabelProperties> = ({
  id,
  label,
}: LabelProperties) => {
  return (
    <label className="label" htmlFor={id}>
      {label}
    </label>
  );
};

interface LabelProperties {
  id: string;
  label: string;
}
