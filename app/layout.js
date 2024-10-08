import Header from './components/Header';
import SideBarNav from './components/SideBarNav';
import { AuthProvider } from './contexts/AuthContext';
import './globals.css';

export const metadata = {
  title: 'Bulltech Test',
  description: 'Bulltech Dashbaord and login test',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AuthProvider>
          <SideBarNav />
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
