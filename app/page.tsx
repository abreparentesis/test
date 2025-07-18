import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Building2,
  Shield,
  Zap,
  FileText,
  AlertTriangle,
  ArrowRight,
  Users,
  Clock,
  Target,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-900">AEC Copilot</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition-colors">
              Benefits
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100">AI-Powered BIM Compliance</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Never Miss a <span className="text-emerald-600">Compliance Issue</span> Again
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            AEC Copilot is the first retrieval-augmented AI assistant embedded directly in your BIM environment. Get
            real-time compliance checking against IBC, NFPA, and EU directives with contextual annotations and
            actionable remediation guidance.
          </p>
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-6">
                  Join the Beta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              No credit card required
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              14-day free trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
              Setup in minutes
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Intelligent Compliance at Every Step</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI doesn't just flag issues—it understands your design intent and guides you to compliant solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle>Real-Time Compliance Checking</CardTitle>
                <CardDescription>
                  Continuous monitoring of your 3D model against IBC, NFPA, and EU building codes as you design.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>Contextual Annotations</CardTitle>
                <CardDescription>
                  Issues are highlighted directly on the affected elements with precise explanations and legal
                  citations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Guided Remediation</CardTitle>
                <CardDescription>
                  Get step-by-step guidance on how to resolve compliance issues before project submission.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Live 3D Model Integration</CardTitle>
                <CardDescription>
                  Seamlessly integrates with your existing BIM workflow without disrupting your design process.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle>Multi-Discipline Support</CardTitle>
                <CardDescription>
                  Covers architectural, structural, and MEP elements with discipline-specific compliance rules.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Curated Knowledge Base</CardTitle>
                <CardDescription>
                  Access to continuously updated regulatory database with the latest code interpretations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How AEC Copilot Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our AI seamlessly integrates into your BIM environment to provide intelligent compliance assistance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-8">
                <img
                  src="/bim-stair-violation.png"
                  alt="Real-time compliance violation highlight in BIM model"
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="h-16 w-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Real-Time Issue Highlight</h3>
              <p className="text-slate-600">
                AEC Copilot continuously monitors your BIM model and instantly highlights compliance violations with
                contextual tooltips, code references, and severity indicators directly on affected elements.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <img
                  src="/compliance-dashboard.png"
                  alt="Compliance dashboard with issue tracking"
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="h-16 w-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Review and Triage Issues</h3>
              <p className="text-slate-600">
                Access a centralized dashboard to review all detected issues, filter by discipline or code type, assign
                to team members, and track resolution status across your entire project.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-wpdTErm1KD7Bx2dLEOjqVBIBTh9QXg.png"
                  alt="Generate Compliance Report dialog showing jurisdiction selection for California 2022 IBC + Local Amendments, checkboxes for Fire Safety, Accessibility, Energy and Seismic sections, Include 3D snapshots option, and Generate Report button"
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <div className="h-16 w-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Generate Structured Compliance Report</h3>
              <p className="text-slate-600">
                Generate comprehensive, permit-ready compliance reports with detailed findings, code citations,
                remediation status, and supporting documentation for submission to authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Reduce Risk, Save Time, Ensure Compliance</h2>
              <p className="text-xl text-slate-600 mb-8">
                AEC Copilot transforms how architects and engineers approach building compliance, turning a reactive
                process into a proactive design advantage.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">75% Faster Compliance Review</h3>
                    <p className="text-slate-600">
                      Eliminate manual code checking and reduce review cycles with real-time compliance feedback.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Reduce Liability Risk</h3>
                    <p className="text-slate-600">
                      Catch compliance issues early in the design phase, before they become costly problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Improve Team Collaboration</h3>
                    <p className="text-slate-600">
                      Share compliance insights across disciplines with clear, actionable guidance for all team members.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Join the Beta?</h3>
                <p className="text-slate-600">Be among the first to experience AI-powered BIM compliance</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Early access to beta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Direct feedback channel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">Shape the product roadmap</span>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                  Join the Beta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join the AEC Copilot Beta</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Be among the first to experience AI-driven compliance checking in your BIM environment. Help us shape the
            future of compliant design.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <Button size="lg" variant="secondary" className="px-6">
                Join Beta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold">AEC Copilot</span>
              </div>
              <p className="text-slate-400">AI-powered compliance assistance for the modern AEC industry.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AEC Copilot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
