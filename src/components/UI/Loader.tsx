import ContentLoader from "react-content-loader";
import cx from 'classnames';
import styles from "./loder.module.css";

export const TableSmallLoader: React.FunctionComponent<any> = (props) => {
  const { width = 180, height = 40 } = props;
  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{
        maxWidth: "100%",
      }}
      {...props}
    >
      <rect x="0" y="0" rx="4" ry="4" width={width} height={height} />
    </ContentLoader>
  );
};

export const TableLoader: React.FunctionComponent = (props) => (
  <tr className={styles.wikiLoader}>
    <td className={cx(styles.x, styles.loaderPadding)}>
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
      <TableSmallLoader width={1400} className={styles.tableLoader} />
    </td>
  </tr>
);
