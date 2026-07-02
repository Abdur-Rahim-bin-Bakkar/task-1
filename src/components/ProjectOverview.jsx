import { Card, CardHeader, Button } from "@heroui/react";
import {
  Github,
  Linkedin,
  Globe,
  Mail,
  Download,
} from "lucide-react";

export default function ProjectOverview() {
  return (
    <Card className="shadow-xl rounded-3xl">
      <CardHeader>
        <div>
          <h2 className="text-3xl font-bold">
            Project Overview
          </h2>

          <p className="text-gray-500 mt-2">
            A simple Full-Stack Next.js application that calculates the total
            price of multiple items and identifies the most expensive one using
            a custom API endpoint.
          </p>
        </div>
      </CardHeader>

      <div className="space-y-8">

        {/* Features */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            🚀 Features
          </h3>

          <ul className="space-y-2 list-disc list-inside text-gray-600">
            <li>Add multiple items with name and price.</li>
            <li>Submit all items to a Next.js API Route.</li>
            <li>Calculate the total price.</li>
            <li>Find the most expensive item.</li>
            <li>Display the calculation result instantly.</li>
            <li>Responsive UI built with Hero UI and Tailwind CSS.</li>
          </ul>
        </div>

        {/* Workflow */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            ⚙️ How It Works
          </h3>

          <ol className="space-y-2 list-decimal list-inside text-gray-600">
            <li>Enter an item name.</li>
            <li>Enter its price.</li>
            <li>Click <strong>Add Item</strong>.</li>
            <li>Add as many items as needed.</li>
            <li>Click <strong>See Result</strong>.</li>
            <li>The frontend sends the items to the API.</li>
            <li>The API calculates the total and most expensive item.</li>
            <li>The result is displayed instantly.</li>
          </ol>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            👨‍💻 Developer
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            <a
              href="https://portfolio-eight-pi-mc123cjc5o.vercel.app/"
              target="_blank"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <Globe />
              Portfolio
            </a>

            <a
              href="https://github.com/Abdur-Rahim-bin-Bakkar"
              target="_blank"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <Github />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/"
              target="_blank"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <Linkedin />
              LinkedIn
            </a>

            <a
              href="mailto:webdesignrahim4061@gmail.com"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-gray-50"
            >
              <Mail />
              Email
            </a>

          </div>
        </div>

        {/* Resume */}
        <div className="flex justify-center">

          <Button
            as="a"
            href="/resume.pdf"
            download
            color="primary"
            size="lg"
            startContent={<Download size={20} />}
          >
            Download Resume
          </Button>

        </div>

      </div>
    </Card>
  );
}