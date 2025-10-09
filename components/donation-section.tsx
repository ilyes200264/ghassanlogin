"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"

export function DonationSection() {
  const [donationType, setDonationType] = useState<"monthly" | "onetime">("onetime")
  const [amount, setAmount] = useState("")

  const predefinedAmounts = [25, 50, 100, 250, 500]

  return (
    <section id="donation" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Soutenez Notre Centre</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Votre générosité nous aide à continuer notre mission et à servir la communauté
          </p>
        </div>

        <Card className="w-full max-w-md mx-auto shadow-xl border-2">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary fill-primary" />
            </div>
            <CardTitle className="text-2xl">Faire un Don</CardTitle>
            <CardDescription className="text-base">
              Choisissez le montant et la fréquence de votre don
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Donation Type Selection */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant={donationType === "onetime" ? "default" : "outline"}
                onClick={() => setDonationType("onetime")}
                className="w-full"
              >
                Don Unique
              </Button>
              <Button
                variant={donationType === "monthly" ? "default" : "outline"}
                onClick={() => setDonationType("monthly")}
                className="w-full"
              >
                Don Mensuel
              </Button>
            </div>

            {/* Predefined Amounts */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Sélectionnez un montant</label>
              <div className="grid grid-cols-3 gap-3">
                {predefinedAmounts.map((value) => (
                  <Button
                    key={value}
                    variant={amount === value.toString() ? "default" : "outline"}
                    onClick={() => setAmount(value.toString())}
                    className="w-full"
                  >
                    {value}$
                  </Button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div>
              <label htmlFor="customAmount" className="block text-sm font-medium text-foreground mb-2">
                Ou entrez un montant personnalisé
              </label>
              <div className="relative">
                <Input
                  id="customAmount"
                  type="number"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              </div>
            </div>

            {/* Donation Button */}
            <Button className="w-full py-6 text-lg" size="lg" disabled={!amount || parseFloat(amount) <= 0}>
              {donationType === "monthly" ? "Faire un don mensuel" : "Faire un don"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Merci pour votre soutien. Que Allah vous récompense.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
