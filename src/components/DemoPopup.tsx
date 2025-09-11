"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import * as DialogPrimitive from "@radix-ui/react-dialog"

export function DemoPopup() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  })

  const { toast } = useToast()

  // Auto open after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 25000)
    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        "https://www.syncoraai.com/api/webhooks/website/LiQApK1h9PzXw4LtPUQe/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Syncora-Public-Key": "PUB_d9f73a87-a96f-4549-949e-c6acd8ff21b2",
          },
          body: JSON.stringify(formData),
        }
      )

      if (res.ok) {
        toast({
          title: "Success",
          variant: "success",
          description: "Demo scheduled successfully!",
        })

        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          message: "",
        })
        setOpen(false)
      } else {
        const t = await res.text()
        setError("❌ There was a problem sending your form: " + t)
        toast({
          title: "Error",
          variant: "destructive",
          description: "❌ There was a problem sending your form.",
        })
      }
    } catch (err) {
      setError("⚠️ Network error. Please try again later.")
      toast({
        title: "Error",
        variant: "destructive",
        description: "⚠️ Network error. Please try again later.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen} >
  <DialogPrimitive.Overlay className="fixed inset-0 bg-transparent" />
    <DialogContent className="w-[95%] max-w-md rounded-2xl p-6">


        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Get A Free Demo
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill in your details and we’ll get back to you.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              name="companyName"
              type="text"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Your Company"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us what you’re looking for..."
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Request Demo"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
