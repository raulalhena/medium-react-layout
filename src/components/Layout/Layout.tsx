
import { LeftSection } from "../LeftSection/LeftSection";
import { RightSection } from "../RightSection/RightSection";
import { Navbar } from "../TopSection/Navbar/Navbar";
import { Footer } from "../BottomSection/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
      <LeftSection />
      <RightSection>
        {children}
      </RightSection>
      </div>
      <Footer />
    </div>
  );
}