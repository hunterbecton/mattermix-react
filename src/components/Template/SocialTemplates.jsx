import React, { useEffect, useState } from 'react';
import Prismic from 'prismic-javascript';
import slugify from 'slugify';

import Layout from '../Layout/Layout';
import H1 from '../Typography/H1';
import TemplateContainer from './TemplateContainer';
import TemplateCard from './TemplateCard';
import Loader from '../Loader/Loader';
import filterTags from '../../utils/filterTags';

const apiEndpoint = 'https://mattermix.cdn.prismic.io/api/v2';
const accessToken =
  'MC5YNENkQ0JVQUFDZ0FtV1ZZ.cO-_vS5oR--_vQ7vv71y77-977-977-9E--_ve-_ve-_ve-_ve-_ve-_ve-_vX4CE--_vUhf77-977-977-977-9Tu-_vQ';

const Client = Prismic.client(apiEndpoint, { accessToken });

const SocialTemplates = () => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'template_card'),
        {
          pageSize: 12,
          page: 1,
          orderings:
            '[my.template_card.collection, my.template_card.reference_number]',
        }
      );
      if (response) {
        setDocs(response.results);
        console.log(response.results);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <TemplateContainer>
        <H1>Social templates</H1>
        {!docs && <Loader />}
        {docs &&
          docs.map((doc, i) => (
            <TemplateCard
              key={i}
              slug={`/social/${slugify(doc.data.collection.toLowerCase())}/${
                doc.data.reference_number
              }`}
              img={doc.data.feature_image.url}
              pro={doc.data.pro}
              tags={filterTags(doc.tags)}
            />
          ))}
      </TemplateContainer>
    </Layout>
  );
};

export default SocialTemplates;
