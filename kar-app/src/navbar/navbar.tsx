import "./navbar.css";

interface NavProps {
  navItems: NavItem[];
}

interface NavItem {
  name: string;
  link: string;
}

function TrainNav(props: NavProps) {
  return (
    <div>
      <ul className="list-style">
        {props.navItems.map((item, index) => {
          return (
            <li className="list-item" key={index}>
              <a className="link-item" href={item.link}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TrainNav;
