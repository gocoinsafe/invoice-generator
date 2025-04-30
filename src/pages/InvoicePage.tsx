import { useState } from "react"
import InvoiceForm from "../components/InvoiceForm"
import InvoicePreview from "../components/InvoicePreview"
import { Invoice } from "../types"

const InvoicePage = () => {
  const [invoice, setInvoice] = useState<Invoice>({
    senderName: "",
    senderAddress: "",
    recipientName: "",
    recipientAddress: "",
    currency: "USD",
    note: "",
    items: [{ name: "", quantity: 1, price: 0 }],
  })

  return (
    <div className="xl:px-[4rem]">
      <div className="flex flex-col items-center xl:flex-row xl:items-start max-w-[1600px] mx-auto">
        <div className="flex-1 py-[2rem] px-6 xl:px-0">
          <div className="max-w-[640px] mx-auto xl:pr-15">
            <h2 className="text-2xl font-semibold mb-2">Invoice Editor</h2>
            <InvoiceForm invoice={invoice} setInvoice={setInvoice} />
          </div>
        </div>

        <div className="w-fit flex-1 py-[28px]">
          <InvoicePreview invoice={invoice} />
        </div>
      </div>
    </div>
  )
}

export default InvoicePage
