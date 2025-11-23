"use client"

import { Plus } from "lucide-react"
import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMerchant } from "@/contexts/merchant-context"
import { CashierFormOverlay } from "../payments/cashier-form-overlay"

export default function SettingsPage() {
  const [isCashierFormOpen, setIsCashierFormOpen] = useState(false)
  const { refreshCashiers } = useMerchant()

  const handleCashierSuccess = useCallback(() => {
    refreshCashiers()
  }, [refreshCashiers])

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-heading font-bold">Settings</h1>
        <p className="text-foreground/50 text-sm">Manage your account settings and preferences</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cashiers</CardTitle>
          <CardDescription>Manage your cashiers</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => setIsCashierFormOpen(true)}
            variant="default"
            className="h-12 text-lg !font-heading !font-bold"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create cashier
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Coming soon</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/50">Settings features will be available here.</p>
        </CardContent>
      </Card>

      <CashierFormOverlay
        open={isCashierFormOpen}
        onClose={() => setIsCashierFormOpen(false)}
        onSuccess={handleCashierSuccess}
      />
    </div>
  )
}
