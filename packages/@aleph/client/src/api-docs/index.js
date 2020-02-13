import React, { useState, useEffect } from 'react';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

import { apiService } from 'services';

const SwaggerViewer = () => {
  const [spec, setSpec] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const res = apiService.get('/docs/swagger.json');
    res
      .then(res => setSpec(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? <div>loading...</div> : <SwaggerUI spec={spec} />;
};

export default SwaggerViewer;
