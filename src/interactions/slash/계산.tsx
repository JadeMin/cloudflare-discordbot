import type { APIInteraction } from 'discord-api-types/v9';
import type { CommandHandler, CommandResponse } from 'slshx';

import {
	createElement,
	useDescription,
	useString, useInteger, useNumber, useBoolean,
	Fragment, Message, Embed, Field, Modal, Button, Input, Row,
	useButton, useModal, useInput,
} from 'slshx';

export default {
	"계산": {
		"더하기": (): CommandHandler => {
			// 명령어 설명
			useDescription("두 숫자의 덧셈 결과값을 구합니다.");

			// 명령어에 사용될 명령어 옵션
			const argv_n1 = useInteger("숫자1", "덧셈에 사용될 첫번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			const argv_n2 = useInteger("숫자2", "덧셈에 사용될 두번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			

			// 슬래시 명령어 사용 시 반환할 컴포넌트
			return (
				interaction: APIInteraction,
				workerSecret: {},
				workerContext: ExecutionContext
			): CommandResponse => (
				<Message>
					{
						// 숫자 1과 숫자 2를 더합니다.
						argv_n1 + argv_n2
					}
				</Message>
			);
		},
		"빼기": () => {
			// 명령어 설명
			useDescription("두 숫자의 뺄셈 결과값을 구합니다.");

			// 명령어에 사용될 명령어 옵션
			const argv_n1 = useInteger("숫자1", "뺄셈에 사용될 첫번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			const argv_n2 = useInteger("숫자2", "뺄셈에 사용될 두번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			

			// 슬래시 명령어 사용 시 반환할 컴포넌트
			return (
				interaction: APIInteraction,
				workerSecret: {},
				workerContext: ExecutionContext
			): CommandResponse => (
				<Message>
					{
						// 숫자 1과 숫자 2를 뺍니다.
						argv_n1 - argv_n2
					}
				</Message>
			);
		},
		"곱하기": () => {
			// 명령어 설명
			useDescription("두 숫자의 곱셈 결과값을 구합니다.");

			// 명령어에 사용될 명령어 옵션
			const argv_n1 = useInteger("숫자1", "곱셈에 사용될 첫번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			const argv_n2 = useInteger("숫자2", "곱셈에 사용될 두번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			

			// 슬래시 명령어 사용 시 반환할 컴포넌트
			return (
				interaction: APIInteraction,
				workerSecret: {},
				workerContext: ExecutionContext
			): CommandResponse => (
				<Message>
					{
						// 숫자 1과 숫자 2를 곱합니다.
						argv_n1 * argv_n2
					}
				</Message>
			);
		},
		"나누기": () => {
			// 명령어 설명
			useDescription("두 숫자의 나눗셈 결과값을 구합니다.");

			// 명령어에 사용될 명령어 옵션
			const argv_n1 = useInteger("숫자1", "나눗셈에 사용될 첫번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			const argv_n2 = useInteger("숫자2", "나눗셈에 사용될 두번째 숫자값입니다.", {
				required: true,
				min: 1, max: 9999,
			});
			

			// 슬래시 명령어 사용 시 반환할 컴포넌트
			return (
				interaction: APIInteraction,
				workerSecret: {},
				workerContext: ExecutionContext
			): CommandResponse => (
				<Message>
					{
						// 숫자 1과 숫자 2를 나눕니다.
						argv_n1 / argv_n2
					}
				</Message>
			);
		}
	}
};