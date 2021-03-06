import evaluate from '..';
import createNumberNode from '../../create/create-number-node';
import createPower from '../../create/create-power';
import { Power, Context, SyntaxTreeNode } from '../../types';
import { createBinaryOperatorFunctionComposition } from '../../utils/compose-function-utils';

export default function evaluatePower(node: Power, context: Context): SyntaxTreeNode {
    const leftChild = evaluate(node.left, context);
    const rightChild = evaluate(node.right, context);

    if (leftChild.type === 'number' && rightChild.type === 'number' && context.options.operators.powerNumberNumber) {
        if (leftChild.value === 0 && rightChild.value < 0) {
            throw `ArithmeticError: division by zero is not allowed`;
        }

        return createNumberNode(Math.pow(leftChild.value, rightChild.value));
    } else if (
        leftChild.type === 'function' &&
        rightChild.type === 'function' &&
        context.options.operators.powerFunctionFunction
    ) {
        return createBinaryOperatorFunctionComposition(leftChild, rightChild, createPower, context);
    }

    throw `TypeError: <${leftChild.type}> ^ <${rightChild.type}> is not defined`;
}
