import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import logoImage from '../images/logo.png';
import pccss from '../css/pc.css';
import {Link} from 'react-router-dom';
import PCRegisterForm from './pc_register_form';

import {
	Menu,
	Tabs,
	message,
	Form,
	Input,
	Button,
	Checkbox,
	Modal
} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class PCHeader extends React.Component {

	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0,
			visible: false	
		};
	}


   
    showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };



    
	setModalVisible(value) {
		this.setState({modalVisible: value});
	}


	handleClick(e) {
		if(e.key == "register") {
			this.setState({current: "register"});
		} else {
			this.setState({current: e.key});
		}

	}

	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
	{/* to-do*/}

	}

	callback(key) {
		if(key == 1) {
			this.setState({action:'login'});
		} else if(key == 2) {
			this.setState({action:'register'});
		}
	}



	render() {


        const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					<Link target="_blank">
						<Button type="dashed" htmlType="button">个人中心</Button>
					</Link>
					<Button type="ghost" htmlType="button">退出</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				注册/登录
			</Menu.Item>;


		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" class="logo">
							<img src={logoImage} class = "img" alt="logo"/>
							<span>ReactNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" selectedKeys={[this.state.current]}>
							<Menu.Item key="top">
								<SmileOutlined/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<SmileOutlined/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<SmileOutlined/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<SmileOutlined/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<SmileOutlined/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<SmileOutlined/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<SmileOutlined/>科技
							</Menu.Item>
							{userShow}
						</Menu>


                		
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>


        <Modal
          title="用户中心"
          wrapClassName="vertical-center-modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="关闭"
        >

           <Tabs type="card" defaultActiveKey="1">
    <TabPane tab="登录" key="1">
        <PCRegisterForm></PCRegisterForm>
    </TabPane>
    <TabPane tab="注册" key="2">
      
    </TabPane>
    
  </Tabs>

         
        </Modal>
      
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	};
}
