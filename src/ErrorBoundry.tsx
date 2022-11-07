import { Component, ReactNode } from "react";
import externalClick from "./helpers/externalClickHelper";
import styles from "./styles/error.module.scss";


interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return(
        <div className={styles.container}>
            <div className={styles.caption}>
                Oops, something's gone wrong!
            </div>
            <div className={styles.desc}>
                Not to worry, please <span className={styles.link} onClick={() => externalClick("https://cemalmingir.com", "_self")}>click here</span> to go homepage again.
            </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;