import { ProductCard } from "@/components/productCard/productCard"
import { ResultsCard } from "@/components/resultsSummary/resultsCard"

export default function Home() {
  return (
    <div className="py-32 space-y-32 flex flex-col items-center">
      <ResultsCard />
      <ProductCard />
    </div>
  )
}
