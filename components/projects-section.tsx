"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Netflix Content Analysis Dashboard",
    category: "Data Analytics",
    description:
      "Comprehensive exploratory data analysis of Netflix content library revealing trends in genres, production, and global content strategy.",
    longDescription:
      "An in-depth analysis of Netflix's content library using Python data science tools to uncover trends in genres, content production by country, yearly growth patterns, and ratings distribution. The project provides insights into Netflix's evolving content strategy, highlighting the shift towards international content and mature programming.",
    image: "/P3.jpg",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    features: [
      "Genre popularity analysis",
      "Global content production trends",
      "Yearly growth pattern visualization",
      "Ratings distribution insights",
      "Content strategy analysis",
      "Interactive data visualizations",
    ],
    githubUrl: "https://github.com/ameenatabassum123/Netflix-Content-Analysis",
    liveUrl: "https://github.com/ameenatabassum123/Netflix-Content-Analysis",
    status: "Completed",
    year: "2024",
  },
{
  id: 2,
  title: "Digital Marketing Analytics Dashboard - Power BI",
  category: "BI & Dashboards",
  description:
    "Marketing performance dashboard tracking spend, traffic, clicks, ROAS, CTR, and conversions for campaign optimization.",
  longDescription:
    "An end-to-end Power BI marketing dashboard that visualizes campaign performance across multiple KPIs. Includes DAX-based metrics for ROAS, CTR, conversion rate, and weekly spend analysis. Features dynamic filtering, campaign comparison, and automated refresh to help marketing teams optimize budget allocation and improve ad effectiveness.",
  image: "https://res.cloudinary.com/dnzweylls/image/upload/v1763493011/Dashboard3_wcmqd3.jpg",
  technologies: ["Power BI", "DAX", "Excel", "SQL", "Power Query"],
  features: [
    "Campaign-level KPI tracking",
    "DAX formulas for ROAS & CTR",
    "Weekly performance visualizations",
    "Spend vs revenue analysis",
    "Automated refresh & data modeling",
    "Interactive filters and drilldowns"
  ],
  githubUrl: "https://github.com/ameenatabassum123/",
  liveUrl: "https://github.com/ameenatabassum123/",
  status: "Completed",
  year: "2025"
},
{
  id: 3,
  title: "Operations & Inventory Analytics Dashboard - Power BI",
  category: "BI & Dashboards",
  description:
    "Power BI dashboard monitoring inventory levels, stock movement, and supply chain performance.",
  longDescription:
    "A data-driven inventory analytics dashboard built using Power BI. Includes DAX calculations for stock levels, reorder alerts, variance analysis, and demand trends. Automates reporting workflows and provides stakeholders with clear insights for optimizing supply chain efficiency and inventory planning.",
  image: "https://res.cloudinary.com/dnzweylls/image/upload/v1763493440/Dashboard2_page-0001_twe8vl.jpg",
  technologies: ["Power BI", "Power Query", "SQL", "DAX", "Excel"],
  features: [
    "Real-time inventory monitoring",
    "Reorder level automation",
    "Demand & supply trend analysis",
    "Variance and stock movement insights",
    "Clean data modeling for accuracy",
    "Snapshot-based KPI reporting"
  ],
  githubUrl: "https://github.com/ameenatabassum123/",
  liveUrl: "https://github.com/ameenatabassum123/",
  status: "Completed",
  year: "2025"
}
,
  {
    id: 4,
    title: "Sales Performance Dashboard - Power BI",
    category: "BI & Dashboards",
    description:
      "Interactive Power BI dashboard analyzing sales data with KPI tracking, trend analysis, and automated reporting.",
    longDescription:
      "A comprehensive Power BI dashboard that transforms raw sales data into actionable business insights. Features include DAX calculations for complex metrics, dynamic filters, drill-through capabilities, and automated daily refresh. The dashboard helps stakeholders track revenue, identify top-performing products, and monitor sales trends across regions.",
    image: "https://res.cloudinary.com/dnzweylls/image/upload/v1763493434/Dashboard1_page-0001_fyk2bi.jpg",
    technologies: ["Power BI", "DAX", "Excel", "SQL", "Power Query"],
    features: [
      "Interactive KPI dashboards",
      "DAX measures for advanced calculations",
      "Automated data refresh workflows",
      "Regional performance comparison",
      "Trend analysis and forecasting",
      "Export to PowerPoint for presentations",
    ],
    githubUrl: "https://github.com/ameenatabassum123/",
    liveUrl: "https://github.com/ameenatabassum123/",
    status: "Completed",
    year: "2024",
  },
  {
    id: 5,
    title: "Customer Behavior Analytics - Tableau",
    category: "BI & Dashboards",
    description:
      "Tableau dashboard for e-commerce customer behavior analysis, funnel optimization, and A/B testing insights.",
    longDescription:
      "A data-driven Tableau dashboard that analyzes customer journey, conversion funnels, and user behavior patterns. The project includes cohort analysis, retention metrics, and A/B testing results visualization. Automated data updates through API integration ensure real-time insights for business decision-making.",
    image: "/mobile-project-management-app-interface-with-task-.jpg",
    technologies: ["Tableau", "Python", "SQL", "REST API", "PostgreSQL"],
    features: [
      "Customer funnel analysis",
      "A/B testing visualization",
      "Cohort retention analysis",
      "API-based automated data pulling",
      "Real-time dashboard updates",
      "User behavior segmentation",
    ],
    githubUrl: "https://github.com/ameenatabassum123/",
    liveUrl: "https://github.com/ameenatabassum123/",
    status: "Completed",
    year: "2024",
  },
  {
    id: 6,
    title: "Loan Approval Prediction & Analysis",
    category: "Data Analytics",
    description:
      "A machine learning-based loan approval system with exploratory data analysis and model explainability.",
    longDescription:
      "This project implements an end-to-end ML workflow for loan approval prediction using Logistic Regression and XGBoost models. The system analyzes key applicant details such as income, credit history, loan amount, and other financial factors to make accurate predictions with explainability features using LIME for feature-level insights.",
    image: "/P2.jpg",
    technologies: ["Python", "Streamlit", "Scikit-learn", "XGBoost", "Pandas", "LIME", "Joblib"],
    features: [
      "Logistic Regression & XGBoost models",
      "End-to-end ML pipeline",
      "Interactive prediction interface",
      "Model explainability with LIME",
      "Comprehensive evaluation metrics",
      "One-click deployment ready",
    ],
    githubUrl: "https://github.com/ameenatabassum123/loan-approval",
    liveUrl: "https://loan-approval-demo.streamlit.app",
    status: "Completed",
    year: "2024",
  },
  {
    id: 7,
    title: "Healthcare Data Analysis - Google Looker Studio",
    category: "BI & Dashboards",
    description:
      "Google Looker Studio dashboard for healthcare analytics with patient metrics, appointment tracking, and performance KPIs.",
    longDescription:
      "A comprehensive healthcare analytics dashboard built with Google Looker Studio (formerly Data Studio) that tracks patient appointments, wait times, department performance, and resource utilization. The dashboard integrates multiple data sources and provides automated weekly/monthly reports for hospital administration.",
    image: "/telemedicine-platform-interface-with-video-consult.jpg",
    technologies: ["Google Looker Studio", "SQL", "Google Sheets", "BigQuery", "Python"],
    features: [
      "Patient metrics tracking",
      "Appointment trend analysis",
      "Department performance KPIs",
      "Automated weekly/monthly reports",
      "Multi-source data integration",
      "Real-time data refresh",
    ],
    githubUrl: "https://github.com/ameenatabassum123/",
    liveUrl: "https://github.com/ameenatabassum123/",
    status: "Completed",
    year: "2024",
  },
]

const categories = ["All", "Data Analytics", "BI & Dashboards"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-12 bg-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-44 h-44 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/5 rounded-full animate-gentleRotate"></div>
        <div className="absolute top-2/3 left-2/3 w-24 h-24 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 gradient-text">Data Analytics Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of data analysis projects demonstrating expertise in EDA, dashboard development, BI tools,
            and data-driven insights across various business domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <Filter className="h-5 w-5 text-muted-foreground mt-2 mr-2" />
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-medium hover-lift transition-all duration-300 animate-staggerIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card border-border shadow-lg card-hover glass-morphism overflow-hidden hover-gradient animate-staggerIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="animate-shimmer text-black dark:text-black">{project.status}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-300 animate-staggerIn" style={{ animationDelay: `${techIndex * 0.05}s` }}>
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-300">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent hover-lift">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 hover-lift">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-8 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Button variant="outline" size="lg" asChild className="hover-lift">
            <a href="https://github.com/ameenatabassum123" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
