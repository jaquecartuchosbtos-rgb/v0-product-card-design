"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronDown, ShoppingCart, Share2, CheckCircle2 } from "lucide-react"

interface ProductCardProps {
  image: string
  brand: string
  partNumber: string
  title: string
  specs: { label: string; value: string }[]
  guarantee?: string
  price: number
  originalPrice: number
  discount: number
  inStock?: boolean
  unit?: string
}

export function ProductCard({
  image,
  brand,
  partNumber,
  title,
  specs,
  guarantee,
  price,
  originalPrice,
  discount,
  inStock = true,
  unit = "Item",
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="w-full max-w-[320px] rounded-xl bg-[#ffffff] shadow-[0_2px_16px_rgba(0,0,0,0.08)] overflow-hidden font-sans">
      {/* Image Section */}
      <div className="relative px-4 pt-4 pb-2">
        {/* Discount Badge */}
        <span className="absolute top-4 left-4 z-10 rounded-md bg-[#F57C1F] px-2.5 py-1 text-xs font-bold text-[#ffffff]">
          -{discount}%
        </span>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f1f3] transition-colors hover:bg-[#e4e5e7]"
          aria-label="Add to favorites"
        >
          <Star
            className={`h-[18px] w-[18px] ${
              isFavorite
                ? "fill-[#F57C1F] text-[#F57C1F]"
                : "fill-none text-[#6b7280]"
            }`}
          />
        </button>

        {/* Product Image */}
        <div className="flex items-center justify-center py-4">
          <Image
            src={image}
            alt={title}
            width={200}
            height={180}
            className="h-[160px] w-auto object-contain"
          />
        </div>

        {/* Action icons bottom-right */}
        <div className="absolute bottom-2 right-4 flex flex-col gap-1.5">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f1f3] transition-colors hover:bg-[#e4e5e7]"
            aria-label="Compare"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6b7280"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 3h5v5" />
              <path d="M8 3H3v5" />
              <path d="M12 22V8" />
              <path d="m3 8 5-5" />
              <path d="m21 8-5-5" />
              <path d="M7 14H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
              <path d="M17 14h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
            </svg>
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f1f3] transition-colors hover:bg-[#e4e5e7]"
            aria-label="Share"
          >
            <Share2 className="h-4 w-4 text-[#6b7280]" />
          </button>
        </div>
      </div>

      {/* In Stock Badge */}
      {inStock && (
        <div className="flex items-center gap-1.5 px-4 pb-3">
          <CheckCircle2 className="h-4 w-4 text-[#22c55e]" />
          <span className="text-sm font-medium text-[#22c55e]">In stock</span>
        </div>
      )}

      {/* Divider */}
      <div className="mx-4 h-px bg-[#f0f1f3]" />

      {/* Info Section */}
      <div className="px-4 pt-3 pb-4">
        {/* Brand and Part Number */}
        <p className="text-xs text-[#9ca3af]">
          {brand} | Part No. {partNumber}
        </p>

        {/* Product Title */}
        <h3 className="mt-1.5 text-base font-bold leading-tight text-[#1f2937]">
          {title}
        </h3>

        {/* Specs */}
        <div className="mt-3 flex flex-col gap-1">
          {specs.map((spec, i) => (
            <p key={i} className="text-sm text-[#6b7280]">
              {spec.label}: <span className="text-[#374151]">{spec.value}</span>
            </p>
          ))}
          {guarantee && (
            <p className="text-sm text-[#6b7280]">
              Guarantee: <span className="text-[#374151]">{guarantee}</span>
            </p>
          )}
        </div>

        {/* Pricing */}
        <div className="mt-4 flex items-baseline gap-1.5">
          <span className="text-xs font-medium text-[#F57C1F]">your price</span>
          <span className="text-2xl font-bold text-[#1f2937]">
            ${price.toFixed(2)}
          </span>
          <span className="text-xs text-[#9ca3af]">net</span>
          <span className="text-sm text-[#9ca3af] line-through">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-xs text-[#9ca3af] line-through">net</span>
        </div>

        {/* Quantity + Unit Selector */}
        <div className="mt-4 flex gap-2">
          {/* Quantity Input */}
          <div className="flex h-11 w-[80px] items-center justify-center rounded-lg border border-[#e5e7eb]">
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-full bg-transparent text-center text-sm font-medium text-[#1f2937] outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              aria-label="Quantity"
            />
          </div>

          {/* Unit Selector */}
          <div className="relative flex h-11 flex-1 items-center rounded-lg border border-[#e5e7eb]">
            <select
              defaultValue={unit}
              className="w-full appearance-none bg-transparent px-3 pr-8 text-sm text-[#6b7280] outline-none"
              aria-label="Unit"
            >
              <option value="Item">Item</option>
              <option value="Box">Box</option>
              <option value="Pack">Pack</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 h-4 w-4 text-[#2563eb]" />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#1d4ed8] active:bg-[#1e40af]">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
