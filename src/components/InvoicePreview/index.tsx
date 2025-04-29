import { Fragment, useRef } from "react"
import { formatDate, formatNumber } from "../../utils/formatter"
import { useReactToPrint } from "react-to-print"
import { Invoice } from "../../types"
import { BigNumber } from "bignumber.js"
import { MdSquare } from "react-icons/md"

interface Props {
  invoice: Invoice
}

const InvoicePreview = ({ invoice }: Props) => {
  const {
    senderName,
    senderAddress,
    recipientName,
    recipientAddress,
    items,
    currency,
    note,
  } = invoice

  const today = formatDate()
  const previewRef = useRef<HTMLDivElement>(null)
  const reactToPrintFn = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `Invoice${today.replace(/-/g, "")}`,
  })

  const getAmount = (quantity: number = 1, price: number = 0) => {
    return quantity * price
  }

  const getTotal = () => {
    return items?.reduce(
      (s: any, n: any) => (s += (n.fixedSats ?? n.price) * n.quantity),
      0
    )
  }

  return (
    <div className="flex flex-col overflow-auto items-end w-full px-4 lg:px-0">
      <div className="mb-2">
        <button
          className="bg-[#0d99ff] text-white px-4 py-2  hover:bg-[#007be5]"
          onClick={() => reactToPrintFn()}
        >
          Export PDF
        </button>
      </div>
      <div className="rounded-lg shadow-sm m-[2px] w-fit h-fit bg-white">
        <div
          ref={previewRef}
          id="printArea"
          className="print-section px-6 w-full min-w-[360px] text-sm text-black leading-4.5"
        >
          <div className="bg-white px-6 py-16 lg:px-8 w-full max-w-[800px] lg:w-[800px] mx-auto">
            <div className="flex justify-between mb-3 px-2">
              <div className="flex-3 text-[20px] flex items-center font-bold">
                Invoice
              </div>
              <p className="flex-2 mt-1">Open Date: {today}</p>
            </div>
            <div className="flex mt-7 mb-9  px-2">
              <div className="flex-3 text-left flex flex-col gap-2">
                <p className="font-bold">From:</p>
                <p>{senderName}</p>
                <p className="whitespace-pre-line">
                  {senderAddress ? `Address: ${senderAddress}` : " "}
                </p>
              </div>
              <div className="flex-2 flex flex-col gap-2">
                <p className="font-bold">To:</p>
                <p>{recipientName}</p>
                <p className="whitespace-pre-line">
                  {recipientAddress ? `Address: ${recipientAddress}` : " "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-6 text-right border divide-x font-bold bg-neutral-300">
              {["Description", "Price (USD)", "QTY", "Amount (USD)"].map(
                (e, i) => (
                  <div
                    key={i}
                    className={`text-left py-1 px-2 ${
                      i === 0 ? "col-span-3" : "col-span-1"
                    }`}
                  >
                    {e}
                  </div>
                )
              )}
            </div>
            <div className="grid grid-cols-6 text-right pb-3 gap-y-2 py-[6px] px-[2px]">
              {items?.map((e: any, index: any) => (
                <Fragment key={index}>
                  <div className="text-left col-span-3 px-2">{e.name}</div>
                  <div className="px-2">
                    {formatNumber(e.fixedSats || e.price, e.fixedSats ? 0 : 2)}
                  </div>
                  <div className="px-2">{BigNumber(e.quantity).toFormat()}</div>
                  <div className="px-2">
                    {formatNumber(
                      getAmount(e.quantity, e.price),
                      e.fixedSats ? 0 : 2
                    )}
                  </div>
                </Fragment>
              ))}
              <Fragment>
                <div className="px-2 col-span-4 text-left mt-6 font-bold">
                  Total:
                </div>
                <div className="px-2 col-span-2 text-right mt-6 font-bold">
                  {formatNumber(getTotal(), 2)} {currency}
                </div>
              </Fragment>
            </div>

            {!!note && (
              <div className="mt-7  mb-3 -mx-1">
                <p className="whitespace-pre-line leading-4.5">
                  <span className="inline-flex items-baseline">
                    <MdSquare className="text-[12px]" />
                  </span>{" "}
                  {note}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoicePreview
