import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BJ11660 {

	static int N, M;
	static int[][] sumR;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		int N = Integer.parseInt(st.nextToken());
		int M = Integer.parseInt(st.nextToken());
		
		// 메모이제이션 사용
		sumR = new int[N+1][N+1];
		for(int i=1; i<=N; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			for(int j=1; j<=N; j++) {
				int num = Integer.parseInt(st.nextToken());
				sumR[i][j] = sumR[i-1][j] + num;
			}
		}
		
		// M만큼 계산
		StringBuilder sb = new StringBuilder();
		for(int i=0; i<M; i++) {
			int sum = 0;
			st = new StringTokenizer(br.readLine(), " ");
			int x1 = Integer.parseInt(st.nextToken());
			int y1 = Integer.parseInt(st.nextToken());
			int x2 = Integer.parseInt(st.nextToken());
			int y2 = Integer.parseInt(st.nextToken());
			// 행 계산
			for(int c=y1; c<=y2; c++) {
				sum += sumR[x2][c] - sumR[x1-1][c];
			}
			sb.append(sum).append("\n");
		}
		System.out.println(sb.toString());
	}
}
