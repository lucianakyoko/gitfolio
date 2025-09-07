import { Card, CardContent } from "@/components/ui/card";

type GithubStatsSectionProps = {
  followers: number;
  following: number;
  showFollowers: boolean;
};

export function GithubStatsSection({ followers, following, showFollowers }: GithubStatsSectionProps) {
  return(
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">GitHub Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">    
        {showFollowers && (
            <>
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">{followers}</div>
                    <div className="text-sm text-gray-600 mt-1">Followers</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">{following}</div>
                    <div className="text-sm text-gray-600 mt-1">Following</div>
                  </div>
                </CardContent>
              </Card>
            </>
          )
        }
      </div>
    </section>
  )
}