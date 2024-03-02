import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        GriefPrevention is designed to be as simple as possible to use, both for the players and to setup. The default values are perfect for most servers, however GriefPrevention is highly configuarable and this page attempts to detail the available configuations. </>
    ),
  },
  {
    title: 'Supported Platforms',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        GriefPrevention is built to support Spigot, Paper, Purpur, and any other server implementing the Bukkit API. Older versions of GriefPrevention can be found on BukkitDev. *Note that these older versions are not supported
      </>
    ),
  },
  {
    title: 'Need Help?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        If this page doesn't have the information you're looking for then feel free to use our IRC or Discord channels to ask for support. If you come across a potential bug or exploit, then make an issue on our GitHub
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
