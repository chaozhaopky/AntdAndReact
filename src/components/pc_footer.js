import React from 'react';
import {Row, Col} from 'antd';
import pccss from '../css/pc.css';

export default class PCFooter extends React.Component {
	render() {
		return (
			<footer>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="footer">
            &copy;2020 React CMS. All Rights Reserved.
					</Col>
					<Col span={2}></Col>
				</Row>
			</footer>
		);
	};
}