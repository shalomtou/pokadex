# 🌟 PokéExplorer

<div align="center">
  <img src="public/placeholder-logo.png" alt="PokéExplorer Logo" width="200"/>
  <p><em>Your Ultimate Pokémon Exploration Companion</em></p>
</div>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>

[Live Demo](https://pokemon-explorer-shalomtou.vercel.app/)

## 🌈 Features

- 🔍 **Advanced Search** - Find Pokémon by name, type, or characteristics
- 🎨 **Beautiful UI** - Modern, responsive design with dark/light mode support
- ⚡ **Real-time Updates** - Instant search results and filtering
- 📱 **Responsive Design** - Perfect experience on any device
- 🔄 **State Management** - Efficient data handling with Zustand
- 🎭 **Theme Support** - Elegant dark and light modes
- ⚙️ **API Integration** - Seamless connection with PokéAPI
- 🚀 **Performance Optimized** - Built with Next.js for optimal speed

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v8.0.0 or higher)
- [Git](https://git-scm.com/)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shalomtou/pokadex.git
   cd pokadex
   ```

2. **Install Dependencies**
   ```bash
   npm install
   or
   yarn
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   or
   yarn dev
   ```

4. **Open Your Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Start exploring Pokémon! 🎮

### Production Deployment

1. **Build the Application**
   ```bash
   npm run build
   or
   yarn build
   ```

2. **Start Production Server**
   ```bash
   npm run start
   or 
   yarn start
   ```

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Shadcn/ui](https://ui.shadcn.com/)** - Beautiful component system
- **[Framer Motion](https://www.framer.com/motion/)** - Animations

### State Management & Data Fetching
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[PokéAPI](https://pokeapi.co/)** - Pokémon data source

## 📁 Project Structure

```
pokemon-explorer/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── pokemon/         # Pokemon-related pages
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── ui/             # UI components
│   └── pokemon/        # Pokemon-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── store/             # Zustand store
├── styles/            # Global styles
└── types/             # TypeScript types
```

## 🔧 Available Scripts

```bash
# Development
npm run dev         # Start development server

# Production
npm run build      # Build for production
npm run start      # Start production server

# Quality Assurance
npm run lint       # Run ESLint
npm run type-check # Run TypeScript compiler
```

## 🎨 Customization

### Theme Configuration

The app supports both light and dark modes. To customize themes:

1. Modify `tailwind.config.ts` for color schemes
2. Update `app/globals.css` for global styles
3. Use the theme toggle component to switch themes

### Adding New Features

1. Create new components in `components/`
2. Add new pages in `app/`
3. Update state management in `store/`
4. Add types in `types/`

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for the amazing Pokémon data
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Next.js](https://nextjs.org/) team for the incredible framework
- The Pokémon community for inspiration

## 📫 Support

Having trouble? Got questions? We're here to help!

- 📧 Email: support@pokeexplorer.com
- 🐛 [Issue Tracker](https://github.com/yourusername/pokemon-explorer/issues)
- 💬 [Discussions](https://github.com/yourusername/pokemon-explorer/discussions)

---

<div align="center">
  Made with ❤️ by the Shalom-dev 
</div> 