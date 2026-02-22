import { ProductCard } from "@/components/product-card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f5] p-6">
      <ProductCard
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NCgTj36piYbhjyHbOtlsFzNUhQpNeB.png"
        brand="Omnires"
        partNumber="2123532"
        title="Connection with a handle Omnires round"
        specs={[
          { label: "Material of execution", value: "brass" },
          { label: "Manufacturer's color", value: "chrome" },
        ]}
        guarantee="5 years"
        price={45.0}
        originalPrice={55.0}
        discount={30}
        inStock={true}
        unit="Item"
      />
    </main>
  )
}
