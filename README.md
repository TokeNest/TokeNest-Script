# TokeNest-Script
이 리포지토리는 [TokeNest-SmartContract](https://github.com/TokeNest/TokeNest_SmartContract)에서 배포한 스마트 컨트랙트의 코드를 테스트하기 위해 구축되었습니다.



## How to use
TokeNest-Script를 사용하기 전 필수로 .env.example 파일의 설명을 참고해 .env파일의 파라미터들을 입력해야 합니다.

package를 설치하고 실행하는 방법은 아래와 같습니다.

```bash
yarn install
yarn dev [실행할 파일 경로]
```
Example : 
```bash
yarn install
yarn dev ./src/autoTokenSwap.ts
```

contractInfo.ts 파일 내 token0AmountIn, token1AmountIn의 amount를 조절해 테스트하시면 됩니다.
