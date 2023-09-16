import Navbar from '@/components/navBar/Navbar';
import styles from './styles/globals.scss'
import Footer from '@/components/footer/Footer';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import Cardlist from '@/components/cardList/Cardlist';
import Menu from '@/components/menu/Menu';

export default function Home() {
  return (
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <Cardlist/>
      <Menu/>
    </div>
  </div>
  );
}
