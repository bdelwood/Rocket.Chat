import React from 'react';

import Metrics, { Reply, Content } from '.';

export default {
	title: 'components/Message/Metrics',
	component: Metrics,
};

export const Default = () => <Content>
	<Reply/>
	<Metrics>
		<Metrics.Item>
			<Metrics.Item.Icon name='thread'/>
			<Metrics.Item.Label>3</Metrics.Item.Label>
		</Metrics.Item>
		<Metrics.Item>
			<Metrics.Item.Icon name='user'/>
			<Metrics.Item.Label>3</Metrics.Item.Label>
		</Metrics.Item>
		<Metrics.Item>
			<Metrics.Item.Icon name='clock'/>
			<Metrics.Item.Label>sunday</Metrics.Item.Label>
		</Metrics.Item>
		<Metrics.Item>
			<Metrics.Item.Icon name='bell'/>
			<Metrics.Item.Label>3</Metrics.Item.Label>
		</Metrics.Item>
	</Metrics>
</Content>;
