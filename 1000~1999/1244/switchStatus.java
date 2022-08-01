import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

/**
 * <문제>
 * 학생들이 조건에 맞게 주어진 스위치의 상태를 바꾸는 문제
 * 남학생(1) -> 스위치 번호가 자기가 받은 수의 배수라면 스위치의 상태를 바꾼다.
 * 여학생(2) -> 받은 스위치 번호 기준으로 대칭이 되는 가장 넓은 범위에 속한 스위치들의 상태를 바꾼다.
 * 		      만약 대칭이 아니라면 양옆의 스위치 상태만 바꾼다.
 * 
 * 입력 : 첫째줄에 스위치 개수, 둘째줄 스위치들의 상태, 셋째줄 학생수, 넷째부터 한 학생의 성별 및 받은 수
 * 출력 : 스위치의 상태를 한 줄에 20개씩 출력하고 스위치 상태 사이에 빈칸 하나씩 (on 1, off 0)
 **/


public class BJ1244 {

	static int switchCnt, studentCnt;  // 스위치 개수와 학생들의 수
	static int[] status;	 // 스위치 상태를 담을 배열
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		switchCnt = Integer.parseInt(br.readLine());
		
		// 스위치 상태 입력
		status = new int[switchCnt];
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		for(int i=0; i<switchCnt; i++) {
			status[i] = Integer.parseInt(st.nextToken());
		}
		
		studentCnt = Integer.parseInt(br.readLine());
		for(int i=0; i<studentCnt; i++) {
			st = new StringTokenizer(br.readLine());
			int S = Integer.parseInt(st.nextToken());  // 성별
			int N = Integer.parseInt(st.nextToken())-1;  // 스위치 번호
			
			if(S == 1) { // 남학생이면
				for(int j=N; j<switchCnt; j+=(N+1)) {
					status[j] = status[j] == 1 ? 0 : 1;
				}
			} else { // 여학생이면
				int l = N-1;
				int r = N+1;
				status[N] = status[N] == 1 ? 0 : 1;
				while(l >= 0 && r < switchCnt) { // status 범위 내에서
					if(status[l] != status[r]) break;
					status[l] = status[l] == 1 ? 0 : 1;
					status[r] = status[r] == 1 ? 0 : 1;
					l--;
					r++;
				}
			}
		}
		// 한 줄에 20개씩 출력
		for(int i=0; i<switchCnt; i++) {
			System.out.print(status[i] + " ");
			if((i+1) % 20 == 0)
				System.out.println();
		}
	}

}
