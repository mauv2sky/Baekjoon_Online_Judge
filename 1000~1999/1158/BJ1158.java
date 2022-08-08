import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;

public class BJ1158 {

	static int N, K;
	static List<Integer> list = new LinkedList<>();
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		StringBuilder sb = new StringBuilder();
		sb.append("<");
		
		N = sc.nextInt();
		K = sc.nextInt();
		
		for(int i=1; i<=N; i++) {
			list.add(i);
		}
		
		while(list.size() > 1) {
			for(int i=0; i<K; i++) {
				if(i == K-1) {
					sb.append(list.remove(0)).append(", ");
				} else {
					list.add(list.remove(0));
				}
			}
		}
		
		sb.append(list.remove(0)).append(">");
		System.out.println(sb.toString());
		
	}
}
