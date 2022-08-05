import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Queue;
import java.util.Scanner;

public class BJ2164 {

	static int N;
	static Deque<Integer> queue = new ArrayDeque<>();
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		
		// 입력
		for(int i=1; i<=N; i++) {
			queue.add(i);
		}
		
		while(true) {
      if(queue.size() <= 1) break;
			// 맨 위의 카드 버리기
			queue.remove();
			// 다음 맨위의 카드를 맨 뒤로 보내기
			queue.add(queue.remove());
		}
		
		System.out.println(queue.getLast());
	}

}
