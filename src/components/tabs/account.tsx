// FIXME: label html for issue ?

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function Account() {
  const [activeTab, setActiveTab] = useState('Profile')

  return (
    <div className="min-h-screen bg-transparent text-black p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-gray-400 mb-8">Manage your account settings and set e-mail preferences.</p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <nav className="w-full md:w-1/4">
            {['Profile', 'Account', 'Notifications'].map((tab) => (
              <button
                key={tab}
                className={`block w-full text-left py-2 px-4 rounded-lg ${activeTab === tab ? 'bg-gray-200' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          
          <main className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <p className="text-gray-400 mb-6">This is how others will see you on the site.</p>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="enkyuan" className="mt-1 bg-gray-100 border-gray-300" />
                <p className="mt-1 text-sm text-gray-400">
                  This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
                </p>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Select>
                  <SelectTrigger className="w-full mt-1 bg-gray-100 border-gray-300">
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email1">email1@example.com</SelectItem>
                    <SelectItem value="email2">email2@example.com</SelectItem>
                  </SelectContent>
                </Select>
                <p className="mt-1 text-sm text-gray-400">
                  You can manage verified email addresses in your email settings.
                </p>
              </div>
              
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" className="mt-1 bg-gray-100 border-gray-300" placeholder="Something interesting about me." />
              </div>
              
              <Button type="submit">Save changes</Button>
            </form>
          </main>
        </div>
      </div>
    </div>
  )
}
