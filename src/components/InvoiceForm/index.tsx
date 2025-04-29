import { RiDeleteBin5Fill } from "react-icons/ri"
import { Invoice, Item } from "../../types"

interface Props {
  invoice: Invoice
  setInvoice: (arg: any) => any
}

const InvoiceForm = ({ invoice, setInvoice }: Props) => {
  const handleInvoiceChange = (e: any) => {
    const { name, value } = e.target
    setInvoice((prev: Invoice) => ({ ...prev, [name]: value }))
  }
  const addItem = () => {
    setInvoice((prev: Invoice) => ({
      ...prev,
      items: [...prev.items, { name: "", quantity: 1, price: 0 }],
    }))
  }
  const removeItem = (index: number) => {
    setInvoice((prev: Invoice) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }))
  }
  const updateItem = (index: number, field: keyof Item, value: string) => {
    setInvoice((prev: Invoice) => {
      const newItems = [...prev.items]
      // newItems[index][field] =
      //   field === "name" ? (value as string) : Number(value)
      newItems[index] = {
        ...newItems[index],
        [field]: field === "name" ? (value as string) : Number(value),
      }
      return { ...prev, items: newItems }
    })
  }

  return (
    <div className="flex flex-col text-left w-full">
      <div className="py-6 space-y-4 flex-1">
        <fieldset>
          <legend>From:</legend>
          <input
            className="border p-2 w-full"
            type="text"
            name="senderName"
            placeholder="Name"
            value={invoice.senderName}
            onChange={handleInvoiceChange}
          />
          <textarea
            className="border p-2 w-full mt-3"
            name="senderAddress"
            placeholder="Address"
            value={invoice.senderAddress}
            onChange={handleInvoiceChange}
          />
        </fieldset>
        <fieldset>
          <legend>To:</legend>
          <input
            className="border p-2 w-full"
            type="text"
            name="recipientName"
            placeholder="Name"
            value={invoice.recipientName}
            onChange={handleInvoiceChange}
          />
          <textarea
            className="border p-2 w-full mt-3"
            name="recipientAddress"
            placeholder="Address"
            value={invoice.recipientAddress}
            onChange={handleInvoiceChange}
          />
        </fieldset>
        <fieldset>
          <legend>Items:</legend>
          <input
            className="border p-2 w-full"
            type="text"
            name="currency"
            placeholder="Currency"
            value={invoice.currency}
            onChange={handleInvoiceChange}
          />
          <div>
            <div className="my-2 grid grid-cols-7 gap-2 text-center mr-[34px] font-semibold">
              <span className="col-span-3">Description</span>
              <span className="col-span-2">Price</span>
              <span className="col-span-2">QTY</span>
            </div>
            <div className="space-y-3">
              {invoice.items.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="grid grid-cols-7 gap-2">
                    <input
                      className="border p-2 col-span-3"
                      type="text"
                      placeholder="Item Name"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(index, "name", e.target.value)
                      }
                    />
                    <input
                      className="border p-2 col-span-2"
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(index, "price", e.target.value)
                      }
                    />
                    <input
                      className="border p-2 col-span-2"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(index, "quantity", e.target.value)
                      }
                    />
                  </div>

                  <span
                    className="text-[#cccccc] hover:text-red-500 mx-2 cursor-pointer transition-colors"
                    onClick={() => removeItem(index)}
                  >
                    <RiDeleteBin5Fill className="text-md" />
                  </span>
                </div>
              ))}
            </div>
            <button
              className="bg-lime-500 text-white px-4 py-2 hover:bg-lime-600 mt-3 mb-2 w-[120px] transition-colors"
              onClick={addItem}
            >
              + New Item
            </button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Note:</legend>
          <textarea
            className="border p-2 w-full"
            name="note"
            placeholder="Note"
            rows={5}
            value={invoice.note}
            onChange={handleInvoiceChange}
          />
        </fieldset>
      </div>
    </div>
  )
}

export default InvoiceForm
