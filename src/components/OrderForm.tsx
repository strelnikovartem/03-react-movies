interface OrderFormProps {
  onSubmit: (value: string) => void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
  const handleSubmit = (formData: FormData) => {
    const username = formData.get("username") as string;
    onSubmit(username);
  };

  return (
    <form action={handleSubmit}>
      <input
        type="text"
        name="username"
      />
      <button type="submit">Place order</button>
    </form>
  );
}
