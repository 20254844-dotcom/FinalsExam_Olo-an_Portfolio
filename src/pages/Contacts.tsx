import { useState } from "react";
import emailjs from "@emailjs/browser";
type FormData = {
    name: string;
    email: string;
    message: string;
};
export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const validate = () => {
        if (!formData.name || !formData.email || !formData.message) {
            return "Please fill in all fields.";
        }
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(formData.email)) {
            return "Invalid email format.";
        }
        return "";
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const error = validate();
        if (error) {
            setStatus(error);
            return;
        }
        setLoading(true);
        setStatus("");
        try {
            const response = await emailjs.send(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );
            console.log("SUCCESS:", response);
            setStatus("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("ERROR:", error);
            setStatus("Failed to send message.");
        }
        setLoading(false);
    };
    return (
         <div className="max-w-xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold text-white mb-2">Contact Me</h1>
          <p className="text-gray-400 mb-8">Have something to say? I'd love to hear from you.</p>
    
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <input
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition shadow-lg shadow-blue-500/20"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          <p>{status}</p>
        </div>
    );
}