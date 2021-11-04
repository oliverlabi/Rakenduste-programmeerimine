import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store';
import reportWebVitals from './reportWebVitals';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Footer, Content } = Layout;

ReactDOM.render(
  <React.StrictMode>
      <Store>
        <Layout>
          <Content>
            <App />
          </Content>
          <Footer><h1 className="footer">Application programming</h1></Footer>
        </Layout>
      </Store>
  </React.StrictMode>,
  document.getElementById('container'),
);

reportWebVitals();
