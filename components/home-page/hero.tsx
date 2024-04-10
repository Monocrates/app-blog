import React from 'react';

import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/capybara-nordelta.jpg" alt="An image showing Max" width={300} height={300} />
      </div>
      <h1>Hi, I am max</h1>
      <p>I blog about web development - specially frontend frameworks like Angular or React.</p>
    </section>
  );
};

export default Hero;
