export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-base-content mb-2">
            Privacy Policy
          </h1>
          <p className="text-base-content/60">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="prose max-w-none">
              <p className="text-base-content/80">
                Content for Privacy Policy will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

