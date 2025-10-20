/*
 演習 2-2 MessageCardコンポーネントを作成し、propsを利用する
*/

// メッセージを保持するProps型
type MessageProps = {
    name: string;
    message: string;
};
export default function MessageCard(props: MessageProps) {
    return (
        // MessagePropsが保持する値を利用する
        <div>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
        </div>
    );
}