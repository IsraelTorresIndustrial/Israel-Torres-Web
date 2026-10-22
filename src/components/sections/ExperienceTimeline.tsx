import { coordinationAreas } from '../../content/site';
import { currentRole, previousRoles, upcomingRole } from '../../content/experience';

/**
 * Professional timeline. `compact` (home) keeps one line of context per role;
 * `full` (experience page) adds the current role's dimensions and coordination scope.
 */
export function ExperienceTimeline({ variant = 'compact' }: { variant?: 'compact' | 'full' }) {
  const full = variant === 'full';
  const HeadingTag = full ? 'h2' : 'h3';

  return (
    <ol className="m-0 list-none p-0">
      {upcomingRole && (
        <li className="grid gap-3 border-t border-rule py-8 lg:grid-cols-12 lg:gap-8" data-reveal>
          <div className="lg:col-span-3">
            <p className="label flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="label-strong">{upcomingRole.badge}</span>
            </p>
            <p className="label mt-1">{upcomingRole.period}</p>
          </div>
          <div className="lg:col-span-4">
            <HeadingTag className="h-sub">{upcomingRole.role}</HeadingTag>
            <p className="mt-1 text-ink-2">
              {upcomingRole.company} · {upcomingRole.area}
            </p>
          </div>
          <p className="body-muted lg:col-span-5">{upcomingRole.description}</p>
        </li>
      )}

      <li className="grid gap-3 border-t border-rule-strong py-8 lg:grid-cols-12 lg:gap-8" data-reveal>
        <div className="lg:col-span-3">
          <p className="label flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-ink" aria-hidden="true" />
            <span className="label-strong">{currentRole.badge}</span>
          </p>
          <p className="label mt-1">{currentRole.period}</p>
        </div>
        <div className="lg:col-span-4">
          <HeadingTag className="h-sub">{currentRole.role}</HeadingTag>
          <p className="mt-1 text-ink-2">
            {currentRole.company} · {currentRole.area}
          </p>
        </div>
        <div className="lg:col-span-5">
          <p className="body-muted">{currentRole.description}</p>
        </div>

        {full && (
          <div className="mt-6 lg:col-span-9 lg:col-start-4">
            <ul className="m-0 grid list-none gap-0 p-0 md:grid-cols-3 md:gap-8">
              {currentRole.dimensions.map((d, i) => (
                <li key={d.title} className="border-t border-rule py-5">
                  <p className="label tabular">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="h-item mt-2">{d.title}</h3>
                  <p className="small body-muted mt-2">{d.desc}</p>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-rule pt-5">
              <p className="label">Coordinación transversal · Chile y Argentina</p>
              <ul className="tag-list mt-3" aria-label="Áreas con las que coordino">
                {coordinationAreas.map((a) => (
                  <li key={a} className="tag">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </li>

      {previousRoles.map((role) => (
        <li key={`${role.company}-${role.role}`} className="grid gap-3 border-t border-rule py-8 lg:grid-cols-12 lg:gap-8" data-reveal>
          <div className="lg:col-span-3">
            <p className="label tabular">{role.period}</p>
            <p className="label mt-1">{role.badge}</p>
          </div>
          <div className="lg:col-span-4">
            <HeadingTag className={full ? 'h-sub' : 'h-item'}>{role.role}</HeadingTag>
            <p className="mt-1 text-ink-2">{role.company}</p>
          </div>
          <p className="body-muted lg:col-span-5">{role.highlight}</p>
        </li>
      ))}
    </ol>
  );
}
