import React from 'react';
import './App.css';
import { Download, Leaf, Factory, Globe, Users, TrendingUp } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import heroImage from './assets/hero_image.jpeg';
import reportIcon from './assets/report_icon.png';

const App = () => {
  const reports = [
    {
      title: "Bilancio di Sostenibilità 2023",
      year: "2023",
      type: "Bilancio Completo",
      description: "Report completo sulle performance ESG e gli obiettivi di sostenibilità raggiunti nel 2023.",
      size: "15.2 MB",
      pages: "156 pagine"
    },
    {
      title: "Bilancio di Sostenibilità 2022",
      year: "2022",
      type: "Bilancio Completo",
      description: "Rendicontazione delle attività di sostenibilità e impatto ambientale per l'anno 2022.",
      size: "12.8 MB",
      pages: "142 pagine"
    },
    {
      title: "SASB Report 2023",
      year: "2023",
      type: "Report Specialistico",
      description: "Report secondo gli standard SASB per la rendicontazione di sostenibilità settoriale.",
      size: "3.4 MB",
      pages: "45 pagine"
    },
    {
      title: "GHG Statement 2023",
      year: "2023",
      type: "Emissioni",
      description: "Dichiarazione delle emissioni di gas serra e strategie di riduzione implementate.",
      size: "2.1 MB",
      pages: "28 pagine"
    },
    {
      title: "TCFD Report 2023",
      year: "2023",
      type: "Clima",
      description: "Report sui rischi e opportunità legati al cambiamento climatico secondo TCFD.",
      size: "4.7 MB",
      pages: "67 pagine"
    },
    {
      title: "Bilancio di Sostenibilità 2021",
      year: "2021",
      type: "Bilancio Completo",
      description: "Report di sostenibilità con focus sulla transizione energetica e innovazione sostenibile.",
      size: "11.3 MB",
      pages: "134 pagine"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "33%", label: "Riduzione emissioni GHG", description: "rispetto al 2019" },
    { icon: Leaf, value: "€25M", label: "Investimenti ambientali", description: "nel 2023" },
    { icon: Factory, value: "305kW", label: "Capacità fotovoltaica", description: "installata" },
    { icon: Users, value: "100%", label: "Energia rinnovabile", description: "negli uffici principali" }
  ];

  const handleDownload = (reportTitle) => {
    // Simulazione del download
    alert(`Download di "${reportTitle}" avviato. In un'implementazione reale, questo scaricherebbe il file PDF.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Prysmian Group</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#reports" className="text-sm font-medium hover:text-primary transition-colors">Report</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Chi Siamo</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Report di Sostenibilità
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Trasparenza e responsabilità nel nostro percorso verso un futuro sostenibile
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-primary-foreground"
            onClick={() => document.getElementById('reports').scrollIntoView({ behavior: 'smooth' })}
          >
            <Download className="mr-2 h-5 w-5" />
            Scarica i Report
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">I Nostri Risultati</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Risultati concreti del nostro impegno per la sostenibilità e la responsabilità ambientale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Il Nostro Impegno per la Sostenibilità</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Prysmian Group è leader mondiale nel settore dei cavi e sistemi per l'energia e le telecomunicazioni. 
              Il nostro impegno verso la sostenibilità si concretizza attraverso investimenti in tecnologie innovative, 
              riduzione delle emissioni e sviluppo di soluzioni che abilitano la transizione energetica.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Impatto Globale</h3>
                <p className="text-muted-foreground">
                  Operiamo in oltre 50 paesi con un approccio responsabile e sostenibile
                </p>
              </div>
              <div className="text-center">
                <Leaf className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovazione Verde</h3>
                <p className="text-muted-foreground">
                  Sviluppiamo tecnologie che supportano la transizione verso l'energia pulita
                </p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Responsabilità Sociale</h3>
                <p className="text-muted-foreground">
                  Investiamo nelle comunità e nel benessere dei nostri dipendenti
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section id="reports" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Report di Sostenibilità</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Scarica i nostri report di sostenibilità per approfondire il nostro impegno verso 
              un futuro più sostenibile e responsabile
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <img src={reportIcon} alt="Report Icon" className="h-12 w-12" />
                    <Badge variant="secondary">{report.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                    <span>{report.pages}</span>
                    <span>{report.size}</span>
                  </div>
                  <Badge variant="outline" className="mb-4">{report.type}</Badge>
                  <Button 
                    className="w-full" 
                    onClick={() => handleDownload(report.title)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Scarica PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-lg font-bold">Prysmian Group</span>
              </div>
              <p className="text-sm opacity-80">
                Leader mondiale nei sistemi in cavo per l'energia e le telecomunicazioni
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Report</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Bilanci di Sostenibilità</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Report SASB</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Dichiarazioni GHG</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Report TCFD</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Sostenibilità</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Strategia Climatica</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Innovazione Verde</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Economia Circolare</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Responsabilità Sociale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Via Chiese, 6</li>
                <li>20126 Milano, Italia</li>
                <li>Tel: +39 02 6449 1</li>
                <li>sustainability@prysmian.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2024 Prysmian Group. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

