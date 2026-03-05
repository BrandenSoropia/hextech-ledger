interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => <h2>{text}</h2>;

export default Header;
