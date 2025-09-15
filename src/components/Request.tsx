import { useState, useEffect } from "react";
import Dialog from "./ui/dialog";
import { Button } from "./ui/button"; 

interface RequestProps {
  quantity: number;
}

export default function Request ({ quantity }: RequestProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity,
  });

   useEffect(() => {
    setFormData((prev) => ({ ...prev, quantity }));
  }, [quantity]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Bericht verzonden!");
    setOpen(false);

    // Hier kan je backend call doen, bv:
    // fetch("/api/send-request", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <>
      <Button variant="default" size="lg" onClick={() => setOpen(true)}>
        Vrijblijvend aanvragen
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <h2 className="text-lg font-bold mb-4">Vrijblijvend aanvragen</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Naam"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border font-business font-bold rounded p-2"
            required
          />
          <input
            type="email"
            placeholder="E-mailadres"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border font-business font-bold  rounded p-2"
            required
          />
          <input
            type="tel"
            placeholder="Telefoonnummer (optioneel)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border font-business font-bold  rounded p-2"
          />
          <input
            type="number"
            value={formData.quantity}
            readOnly
            className="border font-business font-bold  rounded p-2 bg-gray-100"
          />
          <Button type="submit">Verzenden</Button>
        </form>
      </Dialog>
    </>
  );
}
