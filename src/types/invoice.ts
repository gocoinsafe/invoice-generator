export type Item = {
  name: string
  quantity: number
  price: number
}

export type Invoice = {
  senderName: string
  senderAddress: string
  recipientName: string
  recipientAddress: string
  currency: string
  note: string
  items: Item[]
}
